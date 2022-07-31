const { COMPANY_DOMAIN } = require('../../utils/constants');

exports.configurations = {
  quote: {
    params: {
      quote: {
        name: 'type',
        isRequired: true,
      },
      name: {
        name: 'name',
        isRequired: true,
      },
      email: {
        name: 'email',
        isRequired: true,
        validation: (value) => {
          if (
            !/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/.test(
              value
            )
          ) {
            return 'Email is not valid.';
          }
          return null;
        },
      },
      details: {
        name: 'details',
        isRequired: true,
      },
      interior: {
        name: 'interior',
        isRequired: false,
      },
      exterior: {
        name: 'exterior',
        isRequired: false,
      },
      decorating: {
        name: 'decorating',
        isRequired: false,
      },
    },
    templates: {
      subject: 'Website Quote Request From {{name}}!',
      body: `<h3>Quote Request From {{name}}</h3>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Requesting:</strong></p>
        <blockquote>
        <span>{{interior}} Interior</span></br>
        <span>{{exterior}} Exterior</span></br>
        <span>{{decorating}} Decorating</span>
        </blockquote>
        <p><strong>Details:</strong></p>
        <blockquote>{{details}}</blockquote>
        <p><i>Sent from ${COMPANY_DOMAIN} quote request form.</i></p>`,
    },
  },
  contact: {
    params: {
      name: {
        name: 'name',
        isRequired: true,
      },
      email: {
        name: 'email',
        isRequired: true,
        validation: (value) => {
          if (
            !/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/.test(
              value
            )
          ) {
            return 'Email is not valid.';
          }
          return null;
        },
      },
      comments: {
        name: 'comments',
        isRequired: true,
      },
    },
    templates: {
      subject: 'Inquiry From {{name}}!',
      body: `<h3>Inquiry From {{name}}</h3>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Message:</strong></p>
        <blockquote>{{comments}}</blockquote>
        <p><i>Sent from ${COMPANY_DOMAIN} contact form.</i></p>`,
    },
  },
  notify: {
    params: {
      message: {
        name: 'message',
        isRequired: true,
      },
    },
    templates: {
      subject: 'Mailer Notification',
      body: '<h2>Notification</h2><blockquote>{{message}}</blockquote>',
    },
  },
};
