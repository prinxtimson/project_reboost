<?php

namespace Rainestech\AdminApi\Controllers;

use App\Notifications\DocDeleted;
use App\Notifications\DocUploaded;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Rainestech\AdminApi\Entity\Documents;
use Rainestech\AdminApi\Entity\FileStorage;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Requests\DocumentRequest;
use Rainestech\AdminApi\Requests\StorageRequest;
use Rainestech\AdminApi\Utils\LocalStorage;
use Rainestech\Personnel\Entity\Recruiters;

class DocumentApiController extends BaseApiController {
    use LocalStorage;

    public function save(StorageRequest $request) {
        $fs = $this->saveLocalWithName($request);
        return response()->json($fs);
    }

    public function saveDoc(DocumentRequest $request) {
        $user = auth('api')->user();
        $doc = new Documents($request->except(['file', 'id']));
        $doc->fileId = $request->input('file.id');
        $doc->editor = auth('api')->id();

        $doc->save();
        $doc->loadWith();
        
      //  $user->notify(new  DocUploaded($doc));

        return response()->json($doc);
    }

    public function editDoc(DocumentRequest $request) {
        
        if (!$doc = Documents::find($request->input('id'))) {
            return $this->jsonError(404, "Document Not Found");
        }

        $doc->fill($request->except(['file', 'id']));
        $doc->fileId = $request->input('file.id');
        $doc->editor = auth('api')->id();

        $doc->update();
        $doc->loadWith();

        return response()->json($doc);
    }

    public function edit(StorageRequest $request) {
        $fs = $this->editFileWithName($request);
        return response()->json($fs);
    }

    public function getFile($link) {
        clock('am here');
        if (!$fs = FileStorage::where('link', $link)->first())
            abort(404, 'File Not Found');
        $file = storage_path('app' . DIRECTORY_SEPARATOR . $fs->tag . DIRECTORY_SEPARATOR . $fs->link);
       if(!Storage::exists('documents/'.$link)) return response('File not found', 404);

        $response = response()->file($file);
        if (ob_get_length()) ob_end_clean();
        return $response;
    }

    public function delete($id) {
        $user = auth('api')->user();
        $fs = FileStorage::findOrFail($id);

        $fs->delete();
        $this->deleteFile($fs->tag, $fs->link);

      //  $user->notify(new  DocDeleted($fs));

        return response()->json($fs);
    }

    public function archiveDocument($id) {
        $fs = Documents::findOrFail($id);

        $fs->delete();
        
        return response()->json($fs);
    }

    public function deleteDocument($id) {
        $user = auth('api')->user();
        $fs = Documents::findOrFail($id);
        $file = FileStorage::findOrFail($fs->fileId);

        $fs->forceDelete();
        $file->delete();

        $this->deleteFile($fs->tag, $fs->link);

        $doc = $fs->toArray();
        $user->notify(new  DocDeleted($doc));
        
        return response()->json($fs);
    }

    public function getMyDocuments() {
        return response()->json(Documents::where('editor', auth('api')->id())->orderBy('id', 'DESC')->get());
    }

    public function getUserDocuments($id) {
        return response()->json(Documents::where('editor', $id)
            ->where('private', 0)
            ->get());
    }
}