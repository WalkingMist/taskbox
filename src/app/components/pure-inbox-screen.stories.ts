import { importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";

import type { Meta, StoryObj } from "@storybook/angular";
import { applicationConfig, moduleMetadata  } from "@storybook/angular";
import { fireEvent, within } from "@storybook/test";
import { NgxsModule, Store } from "@ngxs/store";

import { TaskModule } from "./task.module";
import { TasksState } from "../state/task.state";
import PureInboxScreenComponent from "./pure-inbox-screen.component";

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ CommonModule, TaskModule],
    }),
    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    })
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};
export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  },
};
