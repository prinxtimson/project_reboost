<?php

namespace Rainestech\Personnel\Entity;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Rainestech\AdminApi\Entity\Users;

/**
 * Rainestech\Personnel\Entity\Activities
 *
 * @property int $id
 * @property string|null $type
 * @property int|null $userID
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Activities newModelQuery()
 * @method static Builder|Activities newQuery()
 * @method static Builder|Activities query()
 * @method static Builder|Activities whereId($value)
 * @method static Builder|Activities whereType($value)
 * @method static Builder|Activities whereCreatedAt($value)
 * @method static Builder|Activities whereUpdatedAt($value)
 * @method static Builder|Activities whereUserID($value)
 * @mixin Eloquent
 * @property-read Users|null $users
 */
class Activities extends Model {
    protected $table = 'admin_activities';
    protected $guarded = ['id'];
    //protected $dateFormat = 'Y-m-d h:m:s';

    public function user()
    {
        return $this->belongsTo(Users::class, 'userID');
    }
}