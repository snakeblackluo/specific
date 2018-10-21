import React, { Component } from 'react';
import { Form, Col, Row, Button, Input, DatePicker, Select, Icon} from 'antd';
import PropTypes from 'prop-types';
import styles from './ListTables.module.scss';

const FormItem = Form.Item;

ListTables.propTypes = {
    itemsList: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        require: PropTypes.bool,
        messge: PropTypes.string,
        style: PropTypes.object,
        options: PropTypes.object,
        componemt: PropTypes.node,
    })),
    onSearchClick: PropTypes.func,
    expand: PropTypes.bool,
    defaultNum: PropTypes.number,
}

class ListTables extends Component {
    constructor(props) {
        super(props);
        this.seachItems.bind(this);
    }

    onClickReset = () => {
        this.props.form.resetFields();
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
                                        return (
                                            <DatePicker></DatePicker>
                                        );
                                    case "select":
                                        return (
                                            <Select></Select>
                                        );
                                    case "node":
                                        return items.componemt;
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
        let { expand, defaultNum, onSearchClick} = this.props.form;
        let num = expand ? defaultNum : length(itemsList) - 1;

        return (
            <Form>
                <Row gutter={24}>
                    {this.seachItems().slice(num)}
                </Row>
                <Row>
                    <Col span={24}>
                        <Button type="primary" htmlType="submit" onClick={onSearchClick}>查询</Button>
                        <Button type="primary" htmlType="reset" className={styles.cancel} onClick={this.onClickReset}>取消</Button>
                        {() => {
                            if (expand) {
                                return (
                                    <a className={styles.moreConditions}>更多条件<Icon type="up"></Icon></a>
                                )
                            }
                        }}
                    </Col>
                </Row>
            </Form>
        )
    }
}

const WrappedAdvancedSearchForm = Form.create()(ListTables);

export default WrappedAdvancedSearchForm;


