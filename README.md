# Agm-Direction
this is the directive for [@agm/core](https://github.com/SebastianM/angular-google-maps)

## Install
```bash
git clone https://github.com/explooosion/Agm-Direction.git
```

```bash
npm install
```

```bash
npm start
```

## Use
```html
  <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>
```

## Attribute
```typescript
  @Input() origin: { lat, lng };
  @Input() destination: { lat, lng };
  @Input() waypoints: Object = [];
  @Input() travelMode: String = 'DRIVING';
  @Input() optimizeWaypoints: Boolean = true;
```
