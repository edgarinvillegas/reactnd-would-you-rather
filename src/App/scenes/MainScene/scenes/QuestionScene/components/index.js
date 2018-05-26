import React, {Fragment} from 'react';

import { UserDetails } from 'App/scenes/MainScene';

export default () => {
    return (
        <Fragment>
            <div className="py-5">
                <UserDetails />
            </div>
        </Fragment>
    );
}