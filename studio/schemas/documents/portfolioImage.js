import { limitLanding } from '../helpers';

export default {
  title: 'Portfolio Image',
  name: 'portfolioImage',
  type: 'document',
  fields: [
    {
      title: 'Front Page',
      name: 'onLanding',
      type: 'boolean',
      description: 'If checked, portfolio image will appear on the front page.',
      validation: (Rule) =>
        Rule.required().custom(
          async (value, context) => await limitLanding(4, context, value)
        ),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      required: true,
    },
  ],
  initialValue: {
    onLanding: false,
  },
  preview: {
    select: {
      media: 'image',
      title: 'title',
      onLanding: 'onLanding',
    },
    prepare(selection) {
      const { media, title, onLanding } = selection;
      return {
        title,
        subtitle: onLanding ? 'Front page 🎉' : '',
        media,
      };
    },
  },
};
