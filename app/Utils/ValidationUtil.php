<?php


namespace App\Supports\Utils;

use App\Supports\Validators\Rules\AbstractRule;
use Illuminate\Validation\ValidationException;

class ValidationUtil
{
    /**
     * @param ValidationException $validationException
     *
     * @param string $prefixCode
     *
     * @return \Illuminate\Support\Collection
     */
    public static function convertToListMessageCode(
        ValidationException $validationException,
        $prefixCode = 'validation'
    ) {
        $result = collect();
        $validator = $validationException->validator;
        $errors = $validator->errors()->getMessages();
        $fails = $validator->failed();
        foreach ($fails as $field => $rules) {
            $i = 0;
            foreach ($rules as $rule => $ruleInfo) {
                if (class_exists($rule)) {
                    /** @var mixed $obj */
                    if (is_subclass_of($rule, AbstractRule::class)) {
                        $ruleName = $rule::alias();
                    } else {
                        $ruleName = strtolower($rule);
                    }
                } else {
                    $ruleName = strtolower($rule);
                }
                $result->push([
                    'message_code' => implode('_', [
                        $prefixCode,
                        $field,
                        $ruleName,
                    ]),
                    'message' => $errors[$field][$i],
                ]);
                $i++;
            }
        }

        return $result;
    }
}
