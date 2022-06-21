exports.configurations = {
  quote: {
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
      details: {
        name: 'details',
        isRequired: true,
      },
      interior: {
        name: 'is_interior_checked',
        isRequired: false,
      },
      exterior: {
        name: 'is_exterior_checked',
        isRequired: false,
      },
      decorating: {
        name: 'is_decorating_checked',
        isRequired: false,
      },
    },
    templates: {
      subject: 'Website Quote Request From {{name}}!',
      body: '<h3>Quote Request From {{name}}</h3><p><strong>Email:</strong> {{email}}</p><p><strong>Original message:</strong></p><blockquote>{{details}}</blockquote>',
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
      details: {
        name: 'details',
        isRequired: true,
      },
    },
    templates: {
      subject: 'Inquiry From {{name}}!',
      body: '<h3>Inquiry From {{name}}</h3><p><strong>Email:</strong> {{email}}</p><p><strong>Original message:</strong></p><blockquote>{{details}}</blockquote>',
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
