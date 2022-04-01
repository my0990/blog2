import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { connect } from 'react-redux'


class EditorComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
          text: props.value || "",
        }
    }


    modules = {
        toolbar: [
          //[{ 'font': [] }],
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ],
      }
    
      formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ]
      
      handleChange = (value, delta, source, editor) => {
        this.setState({ text: value });
        // console.log(editor.getContents());
        this.props.onChangeContent(editor.getHTML())
      }

    render(){


        
        return(
            <div style={{height:"90%"}}>
                <ReactQuill 
                    style={{height: "100%"}} 
                    theme="bubble" 
                    modules={this.modules} 
                    formats={this.formats} 
                    value={this.state.text} 
                    placeholder='내용을 작성하세요'
                    onChange={this.handleChange } />

            </div>
        )
    }
}


export default EditorComponent