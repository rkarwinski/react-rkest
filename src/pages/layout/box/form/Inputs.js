import React, { Fragment } from 'react';

// Components
import TextInput from '../../../../components/TextInput';

const Inputs = ({ state, onChange }) => {
    return (
        <Fragment>
            <div className="field">
                <div className="control is-expanded is-task-title">
                    <TextInput
                        className="is-medium"
                        placeholder='User Name'
                        id="nome"
                        value={state.nome}
                        onChange={onChange}
                        autoFocus={true}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control is-expanded is-task-title">
                <label className="label">
                        User Email
                    </label>
                    <div className="control">
                        <input
                            className="input fit-content is-shadowless"
                            type="email"
                            id="email"
                            value={state.email}
                            onChange={onChange}
                        />
                    </div>  
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Password
                </label>
                <div className="control">
                    <input
                        className="input fit-content is-shadowless"
                        type="password"
                        id="senha"
                        value={state.senha}
                        onChange={onChange}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Inputs;
