import React from "react";
import { Card, Button, Icon, Modal } from "semantic-ui-react";
import { useToggle } from "../../hooks/useToggle";

const SnippetCardContainer = ({ header, description, meta, modalContent }) => {
  const [hovered, toggleHovered] = useToggle(false);
  const [modal, toggleModal] = useToggle(false);
  return (
    <React.Fragment>
      <Modal open={modal} closeIcon onClose={toggleModal}>
        {modalContent}
      </Modal>
      <Card
        raised={hovered}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        <Card.Content header={header} />
        <Card.Content meta={meta} />
        <Card.Content description={description} />
        <Card.Content extra>
          <Button onClick={toggleModal}>
            <Icon name="folder open outline" />
          </Button>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export { SnippetCardContainer };
