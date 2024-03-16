import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const Wrapper = () => (
  <div>
    <Card>
      <Card.Header>
        <p>Header</p>
      </Card.Header>
      <Card.Body>Body</Card.Body>
    </Card>
  </div>
);

const meta = {
  title: "Example/Card",
  component: Wrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
