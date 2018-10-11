import { Component } from 'react';
import { Form, Col, Row, Button, Input} from 'antd';
import styles from './ListTables.module.scss';

const FormItem = Form.Item;

class ListTables extends Component {
    constructor(props) {
        super(props);
        this.seachItems.bind(this);
    }
    
    seachItems() {
        let formItemList = [];
        let {itemsList, form} = this.props;
        let getFieldDecorator = form.getFieldDecorator;
        itemsList.map((items) => {
            formItemList.push(
                <Col span={8} key={items.key} style={items.style}>
                    <FormItem label={items.label}>
                        {getFieldDecorator(items.label, {
                            rules: [{
                                require: items.require,
                                messge: items.messge,
                            }],
                        })(
                            element = () => {
                                switch(items.type){
                                    case "input":
                                       return (<Input placeholder={items.placeholder}></Input>)
                                    case "date":
                                        return 
                                    default: 
                                        return (<Input placeholder={items.placeholder}></Input>)
                                }
                            }
                        )}
                    </FormItem>
                </Col>
            )
        })
        

        return formItemList;
    }

    render() {
        let { expand } = this.props.form;
        let defaultNum = expand ? expand : length(itemsList) - 1;

        return (
            <Form>
                <Row gutter={24}>
                    {this.seachItems()}
                </Row>
                <Row gutter={24}>
                    
                </Row>
            </Form>
        )
    }
}

const WrappedAdvancedSearchForm = Form.create()(ListTables);

export default WrappedAdvancedSearchForm;


