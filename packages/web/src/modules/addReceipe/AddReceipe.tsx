import React, { SyntheticEvent } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface Props extends FormComponentProps {}

class AddReceipe extends React.Component <Props> {

  handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{display: 'flex'}}>
        <div style={{width:400, margin: 'auto'}}>
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
            <Form.Item>
              {getFieldDecorator('time', {
                rules: [{ required: true, message: 'Required Field' }],
              })(
                <Input
                  prefix={<Icon type="clock-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Time"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('servingSize', {
                rules: [{ required: true, message: 'Required Field' }],
              })( <Input placeholder="Serving"/> )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('ingredients', {
                rules: [{ required: true, message: 'Required Field' }],
              })(<Input placeholder="Ingredients"/> )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    )
  }
}
export default Form.create<Props>({ name: 'Add Receipe' })(AddReceipe);



