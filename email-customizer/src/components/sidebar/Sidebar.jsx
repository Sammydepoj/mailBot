import React,{useState} from 'react';
import AddRecipients from '../AddRecipients/AddRecipients';
import SendMessage from '../SendMessage/SendMessage';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("AddRecipients");
        
    const handleEnterEmail = () => {
        setActiveTab("EnterEmail");
    };
    const handleComposeMessage = () => {
        // update the state to tab2
        setActiveTab("ComposeMessage");
    }
    const handleAddRecipients = () => {
        setActiveTab("AddRecipients");
    };
    const handleSendMessage = () => {
        // update the state to tab2
        setActiveTab("SendMessage");
    }
    
  return (
    <div className={styles.Tabs}>
      {/* Tab nav */}
      <ul className={styles.nav}>
        <li className={activeTab === "EnterEmail" ? `${styles.active}` : ""} onClick={handleEnterEmail}>Enter Email</li>

        <li className={activeTab === "ComposeMessage" ? `${styles.active}` : ""} onClick={handleComposeMessage}>Compose Message</li>

        <li className={activeTab === "AddRecipients" ? `${styles.active}` : ""} onClick={handleAddRecipients}>Add Recipients</li>

        <li className={activeTab === "SendMessage" ? `${styles.active}` : ""} onClick={handleSendMessage}>Send Message</li>
      </ul>
      <div className="outlet">
        {activeTab === "AddRecipients" ? <AddRecipients/> : <SendMessage/>}
      </div>
    </div>
  )
}

export default Sidebar