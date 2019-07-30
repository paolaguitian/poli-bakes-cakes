import React, { SyntheticEvent } from 'react';
import { Form, Input, Icon, Button, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface Props extends FormComponentProps {}

class AddReceipe extends React.Component <Props> {

  state = {
    showIngredientField: false,
    numberOfIngredients: 3,
  }

  handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderIngredients = () => {
    const { getFieldDecorator } = this.props.form;
    const { numberOfIngredients } = this.state;
    const children = [];

    for (let i = 0; i < numberOfIngredients; i++) {
      children.push(
        <Col span={7} key={i} style={{ display: i < numberOfIngredients ? 'block' : 'none', margin:'0 4px'}}>
          <Form.Item label={`Ingredient ${i+1}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Missing Ingredient!',
                },
              ],
            })(<Input/>)}
          </Form.Item>
        </Col>
      );
    }
    return children;

  }


  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

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
              })( <Input placeholder="Yield Portion"/> )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('numberOfIngredients', {
                rules: [{ required: true, message: 'Required Field' }],
              })(
                <Input
                  placeholder="Number of Ingredients"
                  onBlur={() => this.setState(
                      { showIngredientField: true,
                        numberOfIngredients: getFieldValue('numberOfIngredients'),
                      })}
                />
              )}
            </Form.Item>
              <Form.Item>
                { this.state.showIngredientField ? this.renderIngredients() : <div></div>}
              </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    )
  }
}
export default Form.create<Props>({ name: 'Add Receipe' })(AddReceipe);



