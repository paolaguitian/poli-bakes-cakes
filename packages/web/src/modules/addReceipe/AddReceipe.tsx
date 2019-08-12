import React, { SyntheticEvent, useCallback } from 'react';
import { Form, Input, Icon, Button, Col, TimePicker, Row, InputNumber} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FormComponentProps } from 'antd/lib/form';
import MyDropzone from '../../components/Dropzone';

interface Props extends FormComponentProps { }

class AddReceipe extends React.Component<Props> {

  state = {
    numberOfIngredients: 0,
    numberOfSteps: 0,
  }

   handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderIngredients() {
    const { getFieldDecorator } = this.props.form;
    const { numberOfIngredients } = this.state;
    const children = [];

    for (let i = 0; i < numberOfIngredients; i++) {
      children.push(
        <Col span={7} key={i} style={{ display: i < numberOfIngredients ? 'block' : 'none', margin: '0 4px' }}>
          <Form.Item label={`Ingredient ${i + 1}`}>
            {getFieldDecorator(`ingredient-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Missing Ingredient!',
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Col>
      );
    }
    return children;

  }

  renderInstructions() {
    const { getFieldDecorator } = this.props.form;
    const { numberOfSteps } = this.state;
    const children = [];

    for (let i = 0; i < numberOfSteps; i++) {
      children.push(
        <Form.Item label={`Step ${i + 1}: `}>
          {getFieldDecorator(`step-${i}`, {
            rules: [
              {
                required: true,
                message: 'Missing Step!',
              },
            ],
          })(<TextArea rows={3} />)}
        </Form.Item>
      );
    }
    return children;
  }


  renderForm() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('receipeName', {
            rules: [{ required: true, message: 'Required Field' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Receipe Name"
            />
          )}
        </Form.Item>
        <Row>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('time', config)(<TimePicker placeholder='Ready In' format="hh:mm" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('servingSize', {
                rules: [{ required: true, message: 'Required Field' }],
              })(<Input placeholder="Yield Portion" />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Number of Ingredients">
          {getFieldDecorator('numberOfIngredients', { initialValue: 0 })(
            <InputNumber
              min={1}
              max={30}
              onBlur={() => this.setState({ numberOfIngredients: getFieldValue('numberOfIngredients')})}
            />)
          }
          <span className="ant-form-text"/>
        </Form.Item>
        <Form.Item>
          {this.state.numberOfIngredients ? this.renderIngredients() : <div></div>}
        </Form.Item>
        <Form.Item>
          <Form.Item label="Number of Steps">
            {getFieldDecorator('numberOfSteps', { initialValue: 0 })(
              <InputNumber
                min={1}
                max={30}
                onBlur={() => this.setState({ numberOfSteps: getFieldValue('numberOfSteps')})}
              />) }
            <span className="ant-form-text"/>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          {this.state.numberOfSteps ? this.renderInstructions() : <div></div>}
        </Form.Item>
        <Form.Item>
          <MyDropzone/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Save
        </Button>
        </Form.Item>
      </Form>
    )
  }


  render() {

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          {this.renderForm()}
        </div>
      </div>

    )
  }
}
export default Form.create<Props>({ name: 'Add Receipe' })(AddReceipe);



