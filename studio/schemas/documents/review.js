import React from 'react';
import { limitLanding } from '../helpers';

export default {
  title: 'Review',
  name: 'review',
  type: 'document',
  fields: [
    {
      title: 'Front Page',
      name: 'onLanding',
      type: 'boolean',
      description: 'If checked, review will appear on the front page.',
      validation: (Rule) =>
        Rule.required().custom(
          async (value, context) => await limitLanding(3, context, value)
        ),
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      description: 'Name of the reviewer',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      description: 'A rating out of 5',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      description: 'review content',
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  initialValue: {
    onLanding: false,
  },
  preview: {
    select: {
      author: 'author',
      rating: 'rating',
      onLanding: 'onLanding',
    },
    prepare(selection) {
      const { author, rating, onLanding } = selection;
      return {
        title: author,
        subtitle: onLanding ? 'Front page 🎉' : '',
        media: (
          <span>
            <strong>{rating}</strong> ⭐
          </span>
        ),
      };
    },
  },
};
