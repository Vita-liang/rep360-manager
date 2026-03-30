# REP360 Manager Console - Mobile Design

## Project Overview
- **Brand:** AureliAxis Pharmaceuticals (奥瑞立科医药)
- **Target Users:**
  - R1 = Area Sales Supervisor (ASS)
  - R2 = Regional Sales Manager (RSM)
  - R3 = National Sales Director
  - MKT = Marketing Leadership
- **Data Domains:** CRM/SFA, HCP360, HCO360, Content360, Compliance360, Channel Inventory

## Design System (Mobile-first)
- **Viewport & Layout:** iPhone 14/15 Pro (390×844pt), safe area aware
- **Grid:** 4pt spacing system; layout columns 4/6/12 responsive tokens
- **Cards:** 10pt corner radius, elevation 6dp (cards), 12dp (drawers)
- **Colors:** Medical Blue theme
- **Typography:** Inter (English), Source Han Sans / PingFang (Chinese fallback)
- **Charts:** Line/Bar/Donut with primary #1B6CA8, secondary #4DA3D9
- **Icons:** Linear/outline set
- **Accessibility:** Contrast ≥ 4.5:1; touch targets ≥ 44×44

## Information Architecture
- **Global top bar:** App title, Role/Scope switch chip, Alerts bell
- **Bottom navigation (5 tabs):** Home (Dashboard), Org (Org Tree & Drill-down), KPIs (Trends & Details), Tasks (Coaching & Alerts), More (Reports, Settings)
- **Contextual FAB:** Creates Coaching Plan (R1/R2), Export (R2/R3), Suggest Threshold (MKT readonly proposal)

## Core Screens
1. **Home (Dashboard):** Scope-aware, KPI strip, mini tiles, alerts summary
2. **Org (Org Tree & Drill-down):** Collapsible list, node item layout, drill-down page
3. **KPIs (Trends & Details):** Filters, trend cards, data table
4. **Tasks (Coaching & Alerts):** Top chips, coaching plans, alerts, create coaching plan
5. **More (Reports & Settings):** Reports, role-gated settings, market view (MKT-only)

## Components
- **RoleScopeSwitcher:** Compact chips → full-screen picker

## KPI Definitions
- Revenue Attainment %
- Coverage %
- Visit Freq Achv %
- Quality Score
- NBA Exec %
- Compliance Light
- Inventory Health %