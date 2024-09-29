class ResetItemAndUserCacheCounters < ActiveRecord::Migration[7.1]
  def up
    Item.joins(:bookmarks).find_each do |item|
      Item.reset_counters(item.id, :bookmarks)
    end

    User.joins(:bookmarks).find_each do |user|
      User.reset_counters(user.id, :bookmarks)
    end
  end

  def down
    # no rollback
  end
end
