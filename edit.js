import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    ColorPalette,
    SelectControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';

function Edit({ attributes, setAttributes }) {
    const { 
        content, 
        backgroundColor, 
        paddingTop, 
        paddingRight, 
        paddingBottom, 
        paddingLeft,
        borderRadiusTopLeft,
        borderRadiusTopRight,
        borderRadiusBottomRight,
        borderRadiusBottomLeft,
        headingTag,
        textColor
    } = attributes;

    const blockProps = useBlockProps({
        className: 'text-box',
        style: {
            // Inline styles will be replaced by CSS classes
        }
    });

    const headingOptions = [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' }
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Box Settings', 'vdplug')}>
                    <ColorPalette
                        label={__('Background Color', 'vdplug')}
                        value={backgroundColor}
                        onChange={(newColor) => setAttributes({ 
                            backgroundColor: newColor 
                        })}
                    />
                    
                    <BoxControl
                        label={__('Padding', 'vdplug')}
                        values={{
                            top: paddingTop,
                            right: paddingRight,
                            bottom: paddingBottom,
                            left: paddingLeft
                        }}
                        onChange={(newPadding) => setAttributes({
                            paddingTop: newPadding.top,
                            paddingRight: newPadding.right,
                            paddingBottom: newPadding.bottom,
                            paddingLeft: newPadding.left
                        })}
                    />
                    
                    <BoxControl
                        label={__('Border Radius', 'vdplug')}
                        values={{
                            top: `${borderRadiusTopLeft} ${borderRadiusTopRight}`,
                            bottom: `${borderRadiusBottomRight} ${borderRadiusBottomLeft}`
                        }}
                        onChange={(newRadius) => {
                            const [topLeft, topRight] = newRadius.top.split(' ');
                            const [bottomRight, bottomLeft] = newRadius.bottom.split(' ');
                            setAttributes({
                                borderRadiusTopLeft: topLeft,
                                borderRadiusTopRight: topRight,
                                borderRadiusBottomRight: bottomRight,
                                borderRadiusBottomLeft: bottomLeft
                            });
                        }}
                    />
                </PanelBody>
                
                <PanelBody title={__('Text Settings', 'vdplug')}>
                    <SelectControl
                        label={__('Heading Tag', 'vdplug')}
                        value={headingTag}
                        options={headingOptions}
                        onChange={(newTag) => setAttributes({ headingTag: newTag })}
                    />
                    
                    <ColorPalette
                        label={__('Text Color', 'vdplug')}
                        value={textColor}
                        onChange={(newColor) => setAttributes({ textColor: newColor })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="text-box-container">                    
                    <RichText
                        tagName={headingTag}
                        className="text-box-content"
                        value={content}
                        onChange={(content) => setAttributes({ content })}
                        placeholder={__('Enter your text here...', 'vdplug')}
                    />
                </div>
            </div>
        </>
    );
}

export default Edit;
