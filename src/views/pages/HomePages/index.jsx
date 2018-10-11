import React, { Component } from 'react';
import stytes from './HomePages.module.scss';
import './HomePages.scss';

class HomePages extends Component {
    
    render() {
        console.log(stytes)
        return (  
            <div>
                <form>
                    <input title="dsakhsj" className="shuru"></input>
                    <button className={stytes.submit}>点击</button>
                </form>
                
            </div>  
        );
    }
}

export default HomePages;
