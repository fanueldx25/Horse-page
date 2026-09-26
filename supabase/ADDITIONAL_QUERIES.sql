-- =====================================================================
-- STERLING HORSE SALES - ADDITIONAL MIGRATION & QUERY FILE
-- =====================================================================
-- Instructions:
-- 1. Go to your Supabase SQL Editor: https://supabase.com/dashboard/project/zdhtdooczramyxowyirn/sql/new
-- 2. Paste this entire script into the SQL Editor.
-- 3. Click "RUN" to execute.
-- This ensures all new columns (About images, Rescue Page copy, etc.) exist.
-- =====================================================================

-- 1. Add About Image columns to site_settings if missing
ALTER TABLE IF EXISTS public.site_settings 
ADD COLUMN IF NOT EXISTS about_image_1 TEXT,
ADD COLUMN IF NOT EXISTS about_image_2 TEXT,
ADD COLUMN IF NOT EXISTS about_image_3 TEXT,
ADD COLUMN IF NOT EXISTS about_image_4 TEXT;

-- 2. Add Rescue Page Content columns to site_settings if missing
ALTER TABLE IF EXISTS public.site_settings 
ADD COLUMN IF NOT EXISTS rescue_page_title TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_intro TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_mission TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_second_chance TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_rehoming TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_help_title TEXT,
ADD COLUMN IF NOT EXISTS rescue_page_help_text TEXT;

-- 3. Ensure RLS is enabled and open for public read / admin write on site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_site_settings_select" ON public.site_settings;
CREATE POLICY "public_site_settings_select" ON public.site_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "public_site_settings_all" ON public.site_settings;
CREATE POLICY "public_site_settings_all" ON public.site_settings FOR ALL USING (true);

-- 4. Initialize or update default site settings row
INSERT INTO public.site_settings (
    id,
    business_name,
    tagline,
    email,
    phone,
    whatsapp,
    address,
    country,
    visiting_hours,
    about_text,
    footer_text,
    rescue_page_title,
    rescue_page_intro,
    rescue_page_mission,
    rescue_page_second_chance,
    rescue_page_rehoming,
    rescue_page_help_title,
    rescue_page_help_text
) VALUES (
    'estate_settings',
    'Sterling Horse Sales',
    'Exceptional Horses. Thoughtfully Bred.',
    'concierge@sterlinghorsesales.com',
    '+33 2 31 88 42 10',
    '+33 6 45 20 19 88',
    'Route du Haras 14, 14800 Deauville',
    'France',
    'Saturday and Sunday 1pm to 5pm',
    'Founded on the enduring principle of respectful horsemanship and generational lineage, Sterling operates across 180 hectares of protected pasture in the Pays d''Auge. We combine classical French training traditions with modern equine sports medicine and biomechanics to produce Warmbloods capable of competing at the highest international levels, while remaining calm, sound, and noble in temperament.',
    'Breeding exceptional horses with patience, purpose and respect.',
    'Every Horse Deserves Another Chance.',
    'Our rescue work is driven by a simple belief: horses deserve safety, care, patience, and the opportunity to have a better life.\n\nHorse rescue is not a profit-making part of our work. When a horse needs help, our priority is its welfare—not the financial return.',
    'We help horses that may have been neglected, abandoned, surrendered, displaced, or simply found themselves without a safe home. Whenever possible, we provide them with proper care, rehabilitation, training, and time to recover.\n\nWe believe a difficult past does not have to define a horse''s future.',
    'Some horses arrive needing more than food and shelter. They may need veterinary attention, rehabilitation, patience, retraining, or simply time to learn to trust people again.\n\nOur goal is to give each horse the opportunity to heal, rebuild confidence, and move toward a safe and suitable future home.',
    'When a rescued horse is ready for a new home, we take the time to consider whether the home is appropriate for that individual horse. Our goal is not simply to move a horse on—it is to give that horse a lasting second chance.',
    'Help Us Give Horses a Second Chance',
    'Every rescue takes time, resources, patience, and commitment. Support from people who care about horses helps us continue providing these animals with the care they need.'
)
ON CONFLICT (id) DO UPDATE SET
    business_name = EXCLUDED.business_name,
    tagline = EXCLUDED.tagline,
    about_text = EXCLUDED.about_text,
    rescue_page_title = COALESCE(public.site_settings.rescue_page_title, EXCLUDED.rescue_page_title),
    rescue_page_intro = COALESCE(public.site_settings.rescue_page_intro, EXCLUDED.rescue_page_intro),
    rescue_page_mission = COALESCE(public.site_settings.rescue_page_mission, EXCLUDED.rescue_page_mission),
    rescue_page_second_chance = COALESCE(public.site_settings.rescue_page_second_chance, EXCLUDED.rescue_page_second_chance),
    rescue_page_rehoming = COALESCE(public.site_settings.rescue_page_rehoming, EXCLUDED.rescue_page_rehoming),
    rescue_page_help_title = COALESCE(public.site_settings.rescue_page_help_title, EXCLUDED.rescue_page_help_title),
    rescue_page_help_text = COALESCE(public.site_settings.rescue_page_help_text, EXCLUDED.rescue_page_help_text),
    updated_at = timezone('utc'::text, now());
