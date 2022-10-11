import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditableBlock from "../../../components/Editable/EditableBlock";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "../../../components/Editable/style.css";
import usePrevious from "../../../hooks/usePrevious";
import { setCaretToEnd } from "../../../utils";
import { courseApi } from "../../../api/courseApi";
import { HTTP_OK } from "../../../utils/constant";
import ContentBlock from "./ContentBlock";


function Curriculum(props) {
  const { id, isEditable } = props;
  const initialBlock = { id: uuidv4(), html: "", tag: "p" };

  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBlockId, setCurrentBlockId] = useState(null);

  const prevBlocks = usePrevious(blocks);

  const fetchCurriculum = async () => {
    let result = await courseApi.getCurriculum(id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      if (data !== null && data.isArray && data.length == 0) {
        data = null;
      }

      if (data !== null) {
        setBlocks(data);
      } else {
        setBlocks([initialBlock]);
      }
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchCurriculum();
    setIsLoading(false);
    console.log(blocks);
  }, []);

  useEffect(() => {
    const updatePageOnServer = async (blocks) => {
      try {
        const data = {
          curriculum: blocks
        }
        await courseApi.updateCurriculum(id, data);

      } catch (e) {
        const messages = e.response.data.messages;
        messages.forEach(message => {
          console.log(message.message);
        });
      }
    };

    if (prevBlocks && prevBlocks !== blocks) {
      updatePageOnServer(blocks);
    }
  }, [blocks, prevBlocks]);

  // Handling the cursor and focus on adding and deleting blocks
  useEffect(() => {
    // If a new block was added, move the caret to it
    if (prevBlocks && prevBlocks.length + 1 === blocks.length) {
      const nextBlockPosition =
        blocks.map((b) => b._id).indexOf(currentBlockId) + 1 + 1;
      const nextBlock = document.querySelector(
        `[data-position="${nextBlockPosition}"]`
      );
      if (nextBlock) {
        nextBlock.focus();
      }
    }
    // If a block was deleted, move the caret to the end of the last block
    if (prevBlocks && prevBlocks.length - 1 === blocks.length) {
      const lastBlockPosition = prevBlocks
        .map((b) => b._id)
        .indexOf(currentBlockId);
      const lastBlock = document.querySelector(
        `[data-position="${lastBlockPosition}"]`
      );
      if (lastBlock) {
        setCaretToEnd(lastBlock);
      }
    }
  }, [blocks, prevBlocks, currentBlockId]);

  const updateBlockHandler = (currentBlock) => {
    const index = blocks.map((b) => b._id).indexOf(currentBlock.id);
    const oldBlock = blocks[index];
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: currentBlock.tag,
      html: currentBlock.html,
      imageUrl: currentBlock.imageUrl,
    };
    setBlocks(updatedBlocks);
  }

  const addBlockHandler = (currentBlock) => {
    setCurrentBlockId(currentBlock.id);
    const index = blocks.map((b) => b._id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    const newBlock = { _id: uuidv4(), tag: "p", html: "", imageUrl: "" };
    updatedBlocks.splice(index + 1, 0, newBlock);
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: currentBlock.tag,
      html: currentBlock.html,
    };
    setBlocks(updatedBlocks);
  }

  const deleteBlockHandler = (currentBlock) => {
    if (blocks.length > 1) {
      setCurrentBlockId(currentBlock.id);
      const index = blocks.map((b) => b._id).indexOf(currentBlock.id);
      const deletedBlock = blocks[index];
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      // If the deleted block was an image block, we have to delete
      // the image file on the server
      if (deletedBlock.tag === "img" && deletedBlock.imageUrl) {
        deleteImageOnServer(deletedBlock.imageUrl);
      }
    }
  }

  const onDragEndHandler = (result) => {
    const { destination, source } = result;

    // If we don't have a destination (due to dropping outside the droppable)
    // or the destination hasn't changed, we change nothing
    if (!destination || destination.index === source.index) {
      return;
    }

    const updatedBlocks = [...blocks];
    const removedBlocks = updatedBlocks.splice(source.index - 1, 1);
    updatedBlocks.splice(destination.index - 1, 0, removedBlocks[0]);
    setBlocks(updatedBlocks);
  };

  return (
    <>
      {isLoading && (<div>Loading...</div>)}
      {!isLoading && (
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId={id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {blocks.map((block, i) => {
                  const position = blocks.map((b) => b._id).indexOf(block._id) + 1;
                  if (isEditable) {
                    return (
                      <EditableBlock
                        key={block._id}
                        position={position}
                        id={block._id}
                        tag={block.tag}
                        html={block.html}
                        pageId={id}
                        addBlock={addBlockHandler}
                        deleteBlock={deleteBlockHandler}
                        updateBlock={updateBlockHandler}
                      />
                    );
                  } else {
                    return (
                      <ContentBlock
                        key={block._id}
                        tag={block.tag}
                        html={block.html}
                        pageId={id}
                      />
                    );
                  }
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
}

export default Curriculum;
