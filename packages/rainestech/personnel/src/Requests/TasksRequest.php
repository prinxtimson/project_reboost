<?php

namespace Rainestech\Personnel\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Rainestech\AdminApi\Errors\FormValidationErrors;

class TasksRequest extends FormRequest 
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        $id = request('id');

        switch($this->method()) {
            case 'GET':
            case 'DELETE': {
                return [];
            }
            case 'PUT':
            case 'PATCH': {
                return [
                    'id'  => 'integer|exists:admin_tasks,id',
                    'title'  => 'nullable|between:3,100|string',
                    'description'  => 'nullable|string',
                    'status' => 'integer|nullable',
                    'category' => 'string|nullable',
                    'userID'  => 'integer|exists:admin_users,id',
                ];
            }
            case 'POST': {
                return [
                    'title'  => 'required|between:3,100|string',
                    'description'  => 'nullable|string',
                    'assignBy'  => 'integer|exists:admin_users,id|nullable',
                    'userID'  => 'integer|exists:admin_users,id|nullable',
                ];
            }

            default:break;
        }
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    protected function failedValidation(Validator $validator) {
        throw new FormValidationErrors($validator);
    }
}