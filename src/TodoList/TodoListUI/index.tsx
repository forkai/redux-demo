import 'antd/dist/antd.css';
import * as React from 'react';
import { Input, Button,List } from 'antd';
export interface ITodoListUIProps {
    inputValue: string,
    list:string[];
    changeInputValue: (e: any) => void,
    addItem: () => void,
    deleteItem: (index: number) => void
}
 
const TodoListUI = (props: ITodoListUIProps) => {
    return (  
        <div style={{ margin:'10px',position:'fixed',top:'20%',left:'30%' }}>
            <div>
            <Input 
                value = {this.props.inputValue}  
                placeholder = "Write Something"
                style={{ width:'400px', marginRight:'10px'}}
                onChange={this.props.changeInputValue}
                />
                <Button type="primary" onClick={this.props.addItem}>增加</Button>
            </div>
            <div style={{margin:'10px', width:'400px'}}>
                <List
                bordered={true}
                dataSource={this.props.list}
                renderItem={(item,index) => (
                <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}
                </List.Item>)}
                />
            </div>
        </div>
    );
}
 
export default TodoListUI;