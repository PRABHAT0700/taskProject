import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import './Teaxteditor.css';

const TextEditor = () => {

    const [inputValue, setInputValue] = useState('');

    //  Load the saved input value from local storage when the component mounts
    useEffect(() => {
        const savedInput = localStorage.getItem('inputValue');
        if (savedInput) {
            setInputValue(savedInput);
        }
    }, []);

    // Handle input change and update the state and local storage
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        localStorage.setItem('inputValue', newValue);

    };
    const [text, setText] = useState('');
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);
    const [textColor, setTextColor] = useState('#000'); // Default color chosing black
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleBoldClick = () => {
        setBold(!isBold);
    };

    const handleItalicClick = () => {
        setItalic(!isItalic);
    };

    const handleUnderlineClick = () => {
        setUnderline(!isUnderline);
    };

    const handleColorPickerClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorChange = (color) => {
        setTextColor(color.hex);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            {/* first input field start*/}
            <div className='main-container'>
                <p>Title</p>
                <input
                    type="text"
                    placeholder="Enter something..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {/* first input field end*/}


                {/* text area and all buttons start */}
                <p>Desceprition</p>
                <div className='container'>
                    <div className='btn-wrapper'>
                        <button onClick={handleBoldClick}>B</button>
                        <button onClick={handleItalicClick}>I</button>
                        <button onClick={handleUnderlineClick}>U</button>
                        <button onClick={handleColorPickerClick}>A</button>
                    </div>
                    <textarea
                        type="text"
                        placeholder='text'
                        value={text}
                        onChange={handleTextChange}
                        style={{
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',
                            textDecoration: isUnderline ? 'underline' : 'none',
                            color: textColor,
                        }}
                    />
                    {showColorPicker && (
                        <div>
                            <SketchPicker color={textColor} onChange={handleColorChange} />
                        </div>
                    )}
                </div>
                {/* text area and all buttons end */}

            </div>
        </>
    );
}

export default TextEditor;