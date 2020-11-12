function Link(scope, element, attrs) {
  const ctrl = scope

  ctrl.has = symbol => ctrl.deltaColor.indexOf(symbol) != -1
}

function Directive($interpolate) {
  return {
    template: `
            <span ng-class="{ 'delta-color': true, 'bad': has('▼'), 'good': has('▲') }">
                {{deltaColor[0]}}
            </span>
            <span>
                {{deltaColor.replace(deltaColor[0], '')}}
            </span>
        `,
    link: Link,
    scope: {
      deltaColor: '@'
    }
  }
}

const deltaColor = ['$interpolate', Directive]

export default deltaColor
