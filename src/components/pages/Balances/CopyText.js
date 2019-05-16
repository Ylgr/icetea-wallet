import React, { Component} from 'react';
import './Balances.css';
import Notification from 'rc-notification';
import '../../../assets/styles/notification.css'
import successIc from '../../../assets/img/success-icon.png'

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class CopyText extends Component {

    onCopy = (text) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        //document.execCommand('copy');
    
        try {
          // Now that we've selected the anchor text, execute the copy command  
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copy command was ' + msg + " " + text);
          // window.alert("Copied the text: " + this.state.value);
    
          notification.notice({
            content: 
              <span className="notification">
                <img width={25} height={25} src={successIc} alt="" />Copy successful!
              </span>,
            onClose() {
              console.log('notify  close');
            },
          });
    
        } catch (err) {
          console.log('Oops, unable to copy');
        }

        document.body.removeChild(el);
    
      }

    render(){
        return(
            <div className="sc-fATqzn cNStFF">
                  <i className="fa fa-clone" aria-hidden="true" size="18" onClick={() => this.onCopy(this.props.text)} ></i>
            </div>
        );
    }

}

export default CopyText