import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Calendar from './Components/Calendar'

function CalendarPage() {

  useEffect(() => {
    // Reload 1 time when page is loaded
    if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }, []);

  return (
    <Layout>
      <div className="nk-content-body">
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <h3 className="nk-block-title page-title">
                Lịch của tôi
              </h3>
            </div>
          </div>{/* .nk-block-between */}
        </div>
        <div className="nk-block">
          <Calendar />
        </div>
      </div>
      <div class="modal fade" tabindex="-1" id="previewEventPopup">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div id="preview-event-header" class="modal-header">
              <h5 id="preview-event-title" class="modal-title">Placeholder Title</h5>
              <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                <em class="icon ni ni-cross"></em>
              </a>
            </div>
            <div class="modal-body">
              <div class="row gy-3 py-1">
                <div class="col-sm-6">
                  <h6 class="overline-title">Start Time</h6>
                  <p id="preview-event-start"></p>
                </div>
                <div class="col-sm-6" id="preview-event-end-check">
                  <h6 class="overline-title">End Time</h6>
                  <p id="preview-event-end"></p>
                </div>
                <div class="col-sm-10" id="preview-event-description-check">
                  <h6 class="overline-title">Description</h6>
                  <p id="preview-event-description"></p>
                </div>
              </div>
              <ul class="d-flex justify-content-between gx-4 mt-3">
                <li>
                  <button data-dismiss="modal" data-toggle="modal" data-target="#editEventPopup" class="btn btn-primary">Edit Event</button>
                </li>
                <li>
                  <button data-dismiss="modal" data-toggle="modal" data-target="#deleteEventPopup" class="btn btn-danger btn-dim">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CalendarPage