import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { default as CheckboxInput } from "./Checkbox";

const meta: Meta<typeof CheckboxInput> = {
  title: "Form/Checkbox",
  component: CheckboxInput,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
  decorators: [
    (Story) => {
      return <div className="bg-zinc-300/40 rounded">{Story()}</div>;
    },
  ],
  tags: ["formcomponent"],
};
export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {
  args: {
    label: "",
    disabled: false,
  },
};

export const CheckboxWithLabel: Story = {
  args: { ...Default.args, label: "Aceitar os termos." },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "👇 Validate that the checkbox label is rendered correctly",
      () => {
        const labelElement = canvas.getByText("Aceitar os termos.");
        expect(labelElement);
      }
    );

    await step(
      "👇 Validate that checkbox is checked true when clicked",
      async () => {
        const checkBoxInput = canvas.getByRole("checkbox");
        await userEvent.click(checkBoxInput);
        expect(checkBoxInput).toBeChecked();
      }
    );
  },
};

export const CheckboxDisabled: Story = {
  args: { ...Default.args, disabled: true, checked: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("👇 Validate that checkbox is disabled", async () => {
      const checkboxInput = canvas.getByRole("checkbox");
      expect(checkboxInput).toBeDisabled;
    });
  },
};
