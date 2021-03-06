import React from 'react';
import {Tab} from 'semantic-ui-react'
import ItemExampleDivided from './projectitem'
const panes = [
    { menuItem: 'IBM ', render: () => <Tab.Pane><ItemExampleDivided /></Tab.Pane> },
    { menuItem: 'BT ', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'NeuSoft', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
const ProjectTabular = () =>{

    return <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

}
export default ProjectTabular;