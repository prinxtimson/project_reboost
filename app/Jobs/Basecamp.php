<?php

namespace App\Jobs;

use App\Models\MigrateCandidateData;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class Basecamp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $params;
    public $timeout = 90000000;

    /**
     * Create a new job instance.
     *
     * @param array $params
     */
    public function __construct(Array $params)
    {
        $this->params = $params;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $migrate = new MigrateCandidateData($this->params);
        $migrate->migrateProfile(); //->migrateProjects()->attachProjects();
    }
}
