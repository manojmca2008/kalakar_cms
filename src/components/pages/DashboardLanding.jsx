import React, { Component } from 'react';

class DashboardLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div>
                <p className="dashboard_title">Page Title</p>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Table title</td>
                            <td className="text-right" width="100">

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="text-right">
                                <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="text-right">
                                <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="text-right">
                                <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="text-right">
                                <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DashboardLanding;
