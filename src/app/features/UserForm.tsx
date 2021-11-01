import React, {useCallback, useState} from "react";
import {Avatar, Col, DatePicker, Divider, Form, Input, Row, Select, Tabs, Upload} from "antd";
import {FileService} from "cms-alganews-sdk";
import {UserOutlined} from "@ant-design/icons";
import ImageCrop from "antd-img-crop";

interface UserFormProps {
}

export const UserForm: React.FC<UserFormProps> = () => {

    const [avatar, setAvatar] = useState('');

    const handleAvatarUpload = useCallback(async (file: File) => {
            const avatarSource = await FileService.upload(file);
            setAvatar(avatarSource);
        },
        []);
    return (
        <Form layout={'vertical'}>
            <Row gutter={24} align={"middle"}>
                <Col lg={4}>
                    <ImageCrop shape={'round'}>
                        <Upload
                            maxCount={1}
                            onRemove={() => {
                                setAvatar('');
                            }}
                            beforeUpload={file => {
                                handleAvatarUpload(file);
                                return false;
                            }}>
                            <Avatar size={128} src={avatar} style={{cursor: 'pointer'}} icon={<UserOutlined/>}/>
                        </Upload>
                    </ImageCrop>
                </Col>
                <Col lg={10}>
                    <Form.Item label={'Nome'}>
                        <Input placeholder={"E.g.: João Silva"}/>
                    </Form.Item>
                    <Form.Item label={'Data de nascimento'}>
                        <DatePicker style={{width: '100%'}}
                                    format={'DD/MM/YYYY'}/>
                    </Form.Item>
                </Col>
                <Col lg={10}>
                    <Form.Item label={'Bio'}>
                        <Input.TextArea rows={5}/>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Divider/>
                </Col>
                <Col lg={12}>
                    <Form.Item label={'Perfil'}>
                        <Select placeholder={'Selecione um perfil'}>
                            <Select.Option value={'EDITOR'}>Editor</Select.Option>
                            <Select.Option value={'ASSISTANT'}>Assistente</Select.Option>
                            <Select.Option value={'MANAGER'}>Gerente</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col lg={12}>
                    <Form.Item label={'E-mail'}>
                        <Input type={"email"} placeholder={'E.g.: joao@gmail.com'}/>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Divider/>
                </Col>
                <Col lg={24}>
                    <Tabs defaultActiveKey={'personal'}>
                        <Tabs.TabPane key={'personal'} tab={'Dados pessoais'}>
                            <Row gutter={24}>
                                <Col lg={8}>
                                    <Form.Item label={'País'}>
                                        <Input placeholder={'E.g: Brasil'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Estado'}>
                                        <Input placeholder={'E.g: Mato Grosso'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Cidade'}>
                                        <Input placeholder={'E.g: Cuiabá'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Telefone'}>
                                        <Input placeholder={'E.g: (27) 99999-9999'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'CPF'}>
                                        <Input placeholder={'E.g: 000.000.000-00'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Preço por palavra'}>
                                        <Input placeholder={'E.g: 10,00'}/>
                                    </Form.Item>
                                </Col>
                                {
                                    [1, 2, 3].map((_, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Col lg={6}>
                                                    <Form.Item label={'Habilidade'}>
                                                        <Input placeholder={'E.g: JavaScript'}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col lg={2}>
                                                    <Form.Item label={'%'}>
                                                        <Input/>
                                                    </Form.Item>
                                                </Col>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={'bankAccount'} tab={'Dados bancários'}>
                            <Row gutter={24}>
                                <Col lg={8}>
                                    <Form.Item label={'Instituição'}>
                                        <Input placeholder={'260'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Agência'}>
                                        <Input placeholder={'0001'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Conta sem dígito'}>
                                        <Input placeholder={'12345'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Dígito'}>
                                        <Input placeholder={'1'}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8}>
                                    <Form.Item label={'Tipo de conta'}>
                                        <Select
                                            placeholder={
                                                'Selecione o tipo de conta'
                                            }
                                        >
                                            <Select.Option value={'SAVING'}>
                                                Conta poupança
                                            </Select.Option>
                                            <Select.Option value={'CHECKING'}>
                                                Conta corrente
                                            </Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Form>
    );
};