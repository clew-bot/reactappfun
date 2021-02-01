import React from "react";
import { Drawer, Button } from "rsuite";
// import ReactMarkdown from "react-markdown";
// import { CopyBlock, dracula } from "react-code-blocks";
import { CodeBlock } from "react-code-blocks";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true,
    });
  }
  //   MyCodeComponent(props) {
  //     return (
  //       <CopyBlock
  //         text={props.code}
  //         language={props.language}
  //         showLineNumbers={props.showLineNumbers}
  //         wrapLines
  //       />
  //     );
  //   }

  render() {
    return (
      <div>
        <h1 onClick={() => this.toggleDrawer("left")}>M.E.R.N Stack</h1>

        <Drawer
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>How to: React</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-center">
              React is an open-source, front end, JavaScript library for
              building user interfaces or UI components.
            </p>
            <p>
              It is maintained by Facebook and a community of individual
              developers and companies.
            </p>
            <p>
              Assuming you know Javascript and Node by now, let's start by
              running this in your terminal while cd'd into Desktop:
            </p>
            <CodeBlock
              text="npx create-react-app myFirstApp"
              type="text"
              language="text"
            />
            <p>
              Great, now off to the books,
              https://reactjs.org/docs/getting-started.html. Have fun!{" "}
            </p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={this.close} appearance="primary">
              Confirm
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
}

export default Demo;
