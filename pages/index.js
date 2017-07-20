export default {
  meta: {
    name: 'index',
    allowedWidgets: [
      'widget1',
      'widget2',
      'widget3',
      'logo',
      'header'
    ]
  },
  content: {
    groups: [
      {
        name: 'flexibles',
        widgets: [
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}},
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}},
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}}
        ]
      },
      {
        name: 'blocks',
        widgets: [
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}},
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}},
          {meta: {name: 'header'}, content: {title: 'vuems prototype', disclaimer: 'vuems is based on vue.js and: '}}
        ]
      }
    ]
  }
}
