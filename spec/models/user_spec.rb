describe User, type: :model do
  describe '#add_bookmark' do
    subject { user.add_bookmark(item) }

    let(:user) { described_class.new }
    let(:item) { double(:item) }

    let(:bookmarks) { class_double(Bookmark) }

    let(:expected_result) { double(:expected_result) }

    before do
      allow(user).to receive(:bookmarks).with(no_args).and_return(bookmarks)
      allow(bookmarks).to receive(:find_or_create_by).with(item: item).and_return(expected_result)
    end

    it { is_expected.to eq(expected_result) }
  end
end
