import {ImageResponse} from 'next/og';
import {site} from '@/content/site';

export const alt = `${site.name} — ${site.motto}`;
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #071629 0%, #0c2340 60%, #163760 100%)',
          color: '#fff',
          borderBottom: '12px solid #d4af37',
        }}>
        <div style={{fontSize: 28, color: '#f3e5ab', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700}}>
          Based in Cavan • Nationwide Across Ireland
        </div>
        <div style={{fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.1}}>{site.name}</div>
        <div style={{fontSize: 40, color: '#d4af37', marginTop: 16, fontWeight: 700}}>{site.motto}</div>
        <div style={{fontSize: 30, color: '#cbd5e1', marginTop: 32}}>
          PHECC approved CFR-A, EFR & BLS • Manual Handling • Fire Safety • PMAV
        </div>
      </div>
    ),
    size,
  );
}
