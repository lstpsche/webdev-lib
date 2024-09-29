describe Item, type: :model do
  let(:item_types) { { project: project_type, category: category_type } }
  let(:project_type) { 'project' }
  let(:category_type) { 'category' }

  before { stub_const("#{described_class}::ITEM_TYPES", item_types) }

  describe '.create_project' do
    subject { described_class.create_project(**args) }

    let(:args) { { name: 'sample name', link: 'sample link', description: 'sample desc' } }
    let(:creation_result) { double(:creation_result) }

    before do
      allow(described_class).to receive(:create).with(item_type: project_type, **args).and_return(creation_result)
    end

    it { is_expected.to eq(creation_result) }
  end

  describe '.create_category' do
    subject { described_class.create_category(**args) }

    let(:args) { { name: 'sample name' } }
    let(:creation_result) { double(:creation_result) }

    before do
      allow(described_class).to receive(:create).with(item_type: category_type, **args).and_return(creation_result)
    end

    it { is_expected.to eq(creation_result) }
  end

  describe '#bookmark_for' do
    subject { item.bookmark_for(user) }

    let(:item) { described_class.new(item_type: item_type) }
    let(:user) { double(:user) }

    context 'when item is project' do
      let(:item_type) { project_type }
      let(:bookmarks) { class_double(Bookmark) }

      before do
        allow(item).to receive(:bookmarks).with(no_args).and_return(bookmarks)
        allow(bookmarks).to receive(:find_or_create_by).with(user: user)
      end

      it 'creates bookmark' do
        expect(bookmarks).to receive(:find_or_create_by).with(user: user)

        subject
      end

      it { is_expected.to eq(item) }
    end

    context 'when item is not a project' do
      let(:item_type) { category_type }

      it 'adds error to record' do
        subject

        expect(item.errors[:bookmarks]).to eq(['only projects can be bookmarked'])
      end

      it { is_expected.to eq(item) }
    end
  end

  describe '#unbookmark_for' do
    subject { item.unbookmark_for(user) }

    let(:item) { described_class.new(item_type: item_type) }
    let(:user) { double(:user) }

    context 'when item is project' do
      let(:item_type) { project_type }
      let(:bookmarks) { class_double(Bookmark) }

      before do
        allow(item).to receive(:bookmarks).with(no_args).and_return(bookmarks)
        allow(bookmarks).to receive(:find_by).with(user: user).and_return(bookmark)
      end

      context 'when bookmark was found' do
        let(:bookmark) { instance_double(Bookmark, destroy: true) }

        it 'destroys bookmark' do
          expect(bookmark).to receive(:destroy).with(no_args)

          subject
        end

        it { is_expected.to eq(item) }
      end

      context 'when bookmark was not found' do
        let(:bookmark) { nil }

        it { is_expected.to eq(item) }
      end
    end

    context 'when item is not a project' do
      let(:item_type) { category_type }

      it 'adds error to record' do
        subject

        expect(item.errors[:bookmarks]).to eq(['only projects can be bookmarked'])
      end

      it { is_expected.to eq(item) }
    end
  end

  describe '#add_sub_item' do
    subject { item.add_sub_item(sub_item) }

    let(:item) { described_class.new }
    let(:sub_item) { double(:sub_item) }

    let(:children) { double(:children) }

    before do
      allow(item).to receive(:children).with(no_args).and_return(children)
      allow(children).to receive(:<<).with(sub_item).and_return(item)
    end

    it 'adds sub item' do
      expect(children).to receive(:<<).with(sub_item)

      subject
    end

    it { is_expected.to eq(item) }
  end

  describe '#remove_sub_item' do
    subject { item.remove_sub_item(sub_item) }

    let(:item) { described_class.new }
    let(:sub_item_id) { double(:sub_item_id) }

    let(:children) { class_double(described_class) }

    before do
      allow(item).to receive(:children).with(no_args).and_return(children)
      allow(children).to receive(:find_by).with(id: sub_item_id).and_return(child)
    end

    context 'when passed sub_item is a record' do
      let(:sub_item) { double(:sub_item, id: sub_item_id) }

      before { allow(sub_item).to receive(:is_a?).with(described_class).and_return(true) }

      context 'when child was found' do
        let(:child) { instance_double(described_class) }

        before { allow(child).to receive(:update).with(parent_id: nil) }

        it 'updates child parent_id to nil' do
          expect(child).to receive(:update).with(parent_id: nil)

          subject
        end

        it { is_expected.to eq(item) }
      end

      context 'when child was not found' do
        let(:child) { nil }

        it { is_expected.to eq(item) }
      end
    end

    context 'when passed sub_item is an ID' do
      let(:sub_item) { sub_item_id }

      context 'when child was found' do
        let(:child) { instance_double(described_class) }

        before { allow(child).to receive(:update).with(parent_id: nil) }

        it 'updates child parent_id to nil' do
          expect(child).to receive(:update).with(parent_id: nil)

          subject
        end

        it { is_expected.to eq(item) }
      end

      context 'when child was not found' do
        let(:child) { nil }

        it { is_expected.to eq(item) }
      end
    end
  end
end
