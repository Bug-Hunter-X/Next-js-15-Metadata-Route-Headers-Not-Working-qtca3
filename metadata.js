```javascript
import { MetadataRoute } from 'next/server';

export default function metadata(): MetadataRoute {
  return {
    headers: {
      'X-Custom-Header': 'some-value',
    },
  };
}
```