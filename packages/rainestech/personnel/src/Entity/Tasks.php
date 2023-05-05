<?php

namespace Rainestech\Personnel\Entity;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Rainestech\AdminApi\Entity\Users;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Rainestech\Personnel\Entity\Tasks
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property string|null $data
 * @property int|null $status
 * @property int|null $assignBy
 * @property int|null $userID
 * @property Carbon|null $completedAt
 * @property Carbon|null $plannedStartDate
 * @property Carbon|null $plannedEndDate
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Tasks newModelQuery()
 * @method static Builder|Tasks newQuery()
 * @method static Builder|Tasks query()
 * @method static Builder|Tasks whereId($value)
 * @method static Builder|Tasks whereTitle($value)
 * @method static Builder|Tasks whereDescription($value)
 * @method static Builder|Tasks whereData($value)
 * @method static Builder|Tasks whereComment($value)
 * @method static Builder|Tasks whereCategory($value)
 * @method static Builder|Tasks whereStatus($value)
 * @method static Builder|Tasks whereAssignBy($value)
 * @method static Builder|Tasks whereCreatedAt($value)
 * @method static Builder|Tasks whereCompletedAt($value)
 * @method static Builder|Tasks whereUpdatedAt($value)
 * @method static Builder|Tasks whereUserID($value)
 * @method static Builder|Tasks wherePlannedStartDate($value)
 * @method static Builder|Tasks wherePlannedEndDate($value)
 * @method static Builder|Tasks whereDeletedAt($value)
 * @mixin Eloquent
 * @property-read Users|null $users
 * @property-read Users $editor
 * @method static QueryBuilder|Tasks withTrashed()
 * @method static QueryBuilder|Tasks withoutTrashed()
 */
class Tasks extends Model {
    use SoftDeletes;
    
    protected $table = 'admin_tasks';
    protected $guarded = ['id'];
    // protected $dateFormat = 'Y-m-d h:m:s';
    protected $casts = [ 'data' => 'array' ];

    public function user()
    {
        return $this->belongsTo(Users::class, 'userID');
    }
}