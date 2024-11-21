import { useBlockProps, RichText } from '@wordpress/block-editor';

function save({ attributes }) {
    const { 
        content, 
        headingTag
    } = attributes;

    const blockProps = useBlockProps.save({
        className: 'text-box'
    });

    return (
        <div {...blockProps}>
            <div className="text-box-container">
                <RichText.Content
                    tagName={headingTag}
                    className="text-box-content"
                    value={content}
                />
            </div>
        </div>
    );
}

export default save;