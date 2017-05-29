import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
  <Card>
    <CardHeader
      title="Hello Title"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="OK" />
      <FlatButton label="CANCEL" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
    );
  }
}