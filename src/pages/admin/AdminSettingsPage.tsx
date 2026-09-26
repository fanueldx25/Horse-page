import React, { useState } from 'react';
import {
  Settings,
  Save,
  CheckCircle2,
  Database,
  ShieldCheck,
  Building,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Activity,
  AlertCircle,
  RefreshCw,
  Heart,
} from 'lucide-react';
import { useEstate } from '../../lib/estateContext';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { RichTextEditor } from '../../components/admin/RichTextEditor';
import { ImageUploader } from '../../components/admin/ImageUploader';

export const AdminSettingsPage: React.FC = () => {
  const { settings, updateSettings, isConfiguredWithSupabase, testConnection } = useEstate();

  const [form, setForm] = useState({ ...settings });
  const [activeTab, setActiveTab] = useState<'brand' | 'about' | 'contact' | 'visiting' | 'rescue' | 'database'>('brand');
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Live API Connection testing state
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [apiTestResult, setApiTestResult] = useState<{
    tested: boolean;
    configured: boolean;
    connected: boolean;
    message: string;
    latencyMs?: number;
    tablesVerified?: string[];
  } | null>(null);

  const handleTestApi = async () => {
    setIsTestingApi(true);
    try {
      const result = await testConnection();
      setApiTestResult({ tested: true, ...result });
    } catch (err: any) {
      setApiTestResult({
        tested: true,
        configured: false,
        connected: false,
        message: err.message || 'API test encountered an unexpected error',
      });
    } finally {
      setIsTestingApi(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    setSavedSuccess(false);

    try {
      await updateSettings(form);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: 'brand', label: 'Estate Identity', icon: Building },
    { id: 'about', label: 'About Page & Philosophy', icon: Sparkles },
    { id: 'contact', label: 'Contact & Location', icon: Mail },
    { id: 'visiting', label: 'Visiting Protocol', icon: Calendar },
    { id: 'rescue', label: 'Rescue Page Content', icon: Heart },
    { id: 'database', label: 'Database & Sync', icon: Database },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 pb-24">
      {/* Sticky Header with Quick Save */}
      <div className="sticky top-0 z-20 bg-white border-b border-[#B7B0A4]/30 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A89472] font-semibold block">
            System Configuration
          </span>
          <h1 className="font-serif text-lg sm:text-xl md:text-2xl text-[#20201E] tracking-tight">
            Estate & Website Settings
          </h1>
        </div>

        <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
          {savedSuccess && (
            <span className="text-xs text-emerald-700 flex items-center space-x-1 mr-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Saved successfully</span>
            </span>
          )}

          <button
            type="button"
            onClick={() => handleSave()}
            disabled={isSaving}
            className="inline-flex items-center space-x-2 px-5 py-2 bg-[#24362D] text-white text-xs uppercase tracking-wider hover:bg-[#1c2a23] transition-colors disabled:opacity-50 min-h-[38px] font-medium shadow-xs cursor-pointer"
          >
            {isSaving ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save All Settings</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation Tabs (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#B7B0A4]/30">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 sm:px-4 py-2.5 text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center space-x-2 border-b-2 -mb-[2px] min-h-[40px] cursor-pointer ${
                  isActive
                    ? 'border-[#24362D] text-[#24362D] font-bold bg-white'
                    : 'border-transparent text-[#73716B] hover:text-[#20201E]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Brand & Identity */}
        {activeTab === 'brand' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2">
              Estate Identity & Public Presentation
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Estate / Brand Name
                </label>
                <input
                  type="text"
                  value={form.business_name || ''}
                  onChange={(e) => handleChange('business_name', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Estate Subtitle / Tagline
                </label>
                <input
                  type="text"
                  value={form.tagline || ''}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                Breeding & Operational Philosophy Synopsis
              </label>
              <textarea
                rows={3}
                value={form.footer_text || ''}
                onChange={(e) => handleChange('footer_text', e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
              />
            </div>
          </div>
        )}

        {/* Tab 2: About Narrative & Everything on About Page */}
        {activeTab === 'about' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-8 shadow-xs animate-in fade-in duration-150">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2">
              1. About Page Header & Intro Section
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Main Page Heading (H1)
                </label>
                <input
                  type="text"
                  value={form.about_heading || ''}
                  onChange={(e) => handleChange('about_heading', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Subtitle / Quality Tagline
                </label>
                <input
                  type="text"
                  value={form.about_subtitle || ''}
                  onChange={(e) => handleChange('about_subtitle', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Lead Paragraph 1
                </label>
                <textarea
                  rows={2}
                  value={form.about_lead_1 || ''}
                  onChange={(e) => handleChange('about_lead_1', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Lead Paragraph 2
                </label>
                <textarea
                  rows={2}
                  value={form.about_lead_2 || ''}
                  onChange={(e) => handleChange('about_lead_2', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2 pt-4">
              2. Our Story Section & Image 1
            </h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Story Section Heading
                </label>
                <input
                  type="text"
                  value={form.about_story_heading || ''}
                  onChange={(e) => handleChange('about_story_heading', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                    Story Paragraph 1
                  </label>
                  <textarea
                    rows={3}
                    value={form.about_story_text_1 || ''}
                    onChange={(e) => handleChange('about_story_text_1', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                    Story Paragraph 2
                  </label>
                  <textarea
                    rows={3}
                    value={form.about_story_text_2 || ''}
                    onChange={(e) => handleChange('about_story_text_2', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                    Story Paragraph 3
                  </label>
                  <textarea
                    rows={3}
                    value={form.about_story_text_3 || ''}
                    onChange={(e) => handleChange('about_story_text_3', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                    Story Paragraph 4
                  </label>
                  <textarea
                    rows={3}
                    value={form.about_story_text_4 || ''}
                    onChange={(e) => handleChange('about_story_text_4', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E]"
                  />
                </div>
              </div>

              {/* Image 1 direct uploader */}
              <div className="space-y-2 pt-2">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Our Story Image (Upload directly or enter URL)
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={form.about_image_1 || ''}
                    onChange={(e) => handleChange('about_image_1', e.target.value)}
                    placeholder="Image URL or upload below"
                    className="flex-1 px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] min-h-[40px]"
                  />
                </div>
                <ImageUploader
                  images={form.about_image_1 ? [{ id: 'img-1', url: form.about_image_1, display_order: 1, is_cover: true }] : []}
                  onChange={(items) => handleChange('about_image_1', items[0]?.url || '')}
                  bucket="site-images"
                  singleMode={true}
                />
              </div>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2 pt-4">
              3. Our Values Section
            </h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Values Section Heading
                </label>
                <input
                  type="text"
                  value={form.about_values_heading || ''}
                  onChange={(e) => handleChange('about_values_heading', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] min-h-[40px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89472] font-semibold">Value 1</span>
                  <input
                    type="text"
                    value={form.about_value_1_title || ''}
                    onChange={(e) => handleChange('about_value_1_title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35 font-medium"
                  />
                  <textarea
                    rows={2}
                    value={form.about_value_1_text || ''}
                    onChange={(e) => handleChange('about_value_1_text', e.target.value)}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>

                <div className="p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89472] font-semibold">Value 2</span>
                  <input
                    type="text"
                    value={form.about_value_2_title || ''}
                    onChange={(e) => handleChange('about_value_2_title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35 font-medium"
                  />
                  <textarea
                    rows={2}
                    value={form.about_value_2_text || ''}
                    onChange={(e) => handleChange('about_value_2_text', e.target.value)}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>

                <div className="p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89472] font-semibold">Value 3</span>
                  <input
                    type="text"
                    value={form.about_value_3_title || ''}
                    onChange={(e) => handleChange('about_value_3_title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35 font-medium"
                  />
                  <textarea
                    rows={2}
                    value={form.about_value_3_text || ''}
                    onChange={(e) => handleChange('about_value_3_text', e.target.value)}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>

                <div className="p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89472] font-semibold">Value 4</span>
                  <input
                    type="text"
                    value={form.about_value_4_title || ''}
                    onChange={(e) => handleChange('about_value_4_title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35 font-medium"
                  />
                  <textarea
                    rows={2}
                    value={form.about_value_4_text || ''}
                    onChange={(e) => handleChange('about_value_4_text', e.target.value)}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2 pt-4">
              4. Location & Commitment Sections (With Image Uploaders)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div className="space-y-4 p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30">
                <span className="text-xs uppercase tracking-wider text-[#A89472] font-semibold block">Location Section</span>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Heading</label>
                  <input
                    type="text"
                    value={form.about_location_heading || ''}
                    onChange={(e) => handleChange('about_location_heading', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Paragraph 1</label>
                  <textarea
                    rows={2}
                    value={form.about_location_text_1 || ''}
                    onChange={(e) => handleChange('about_location_text_1', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Paragraph 2</label>
                  <textarea
                    rows={2}
                    value={form.about_location_text_2 || ''}
                    onChange={(e) => handleChange('about_location_text_2', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Location Image</label>
                  <input
                    type="text"
                    value={form.about_image_2 || ''}
                    onChange={(e) => handleChange('about_image_2', e.target.value)}
                    placeholder="URL"
                    className="w-full px-2.5 py-1 text-xs bg-white border border-[#B7B0A4]/35 mb-2"
                  />
                  <ImageUploader
                    images={form.about_image_2 ? [{ id: 'img-2', url: form.about_image_2, display_order: 1, is_cover: true }] : []}
                    onChange={(items) => handleChange('about_image_2', items[0]?.url || '')}
                    bucket="site-images"
                    singleMode={true}
                  />
                </div>
              </div>

              {/* Commitment */}
              <div className="space-y-4 p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30">
                <span className="text-xs uppercase tracking-wider text-[#A89472] font-semibold block">Commitment Section</span>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Heading</label>
                  <input
                    type="text"
                    value={form.about_commitment_heading || ''}
                    onChange={(e) => handleChange('about_commitment_heading', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Paragraph</label>
                  <textarea
                    rows={2}
                    value={form.about_commitment_text_1 || ''}
                    onChange={(e) => handleChange('about_commitment_text_1', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Quote Footer</label>
                  <textarea
                    rows={2}
                    value={form.about_commitment_quote || ''}
                    onChange={(e) => handleChange('about_commitment_quote', e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#B7B0A4]/35"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">Commitment Image</label>
                  <input
                    type="text"
                    value={form.about_image_3 || ''}
                    onChange={(e) => handleChange('about_image_3', e.target.value)}
                    placeholder="URL"
                    className="w-full px-2.5 py-1 text-xs bg-white border border-[#B7B0A4]/35 mb-2"
                  />
                  <ImageUploader
                    images={form.about_image_3 ? [{ id: 'img-3', url: form.about_image_3, display_order: 1, is_cover: true }] : []}
                    onChange={(items) => handleChange('about_image_3', items[0]?.url || '')}
                    bucket="site-images"
                    singleMode={true}
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2 pt-4">
              5. Call To Action Section
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">CTA Heading</label>
                <input
                  type="text"
                  value={form.about_cta_heading || ''}
                  onChange={(e) => handleChange('about_cta_heading', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] min-h-[40px]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B]">CTA Subtext</label>
                <input
                  type="text"
                  value={form.about_cta_text || ''}
                  onChange={(e) => handleChange('about_cta_text', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] min-h-[40px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Contact & Location */}
        {activeTab === 'contact' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2">
              Contact Channels & Regional Location
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Director Contact Email
                </label>
                <input
                  type="email"
                  value={form.email || ''}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Direct Telephone
                </label>
                <input
                  type="text"
                  value={form.phone || ''}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  WhatsApp
                </label>
                <input
                  type="text"
                  value={form.whatsapp || ''}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                Estate Postal Address & Geographic Location
              </label>
              <textarea
                rows={2}
                value={form.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
              />
            </div>
            
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2 mt-6">
              Social Media Links
            </h3>
            
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Instagram URL
                </label>
                <input
                  type="text"
                  value={form.instagram_url || ''}
                  onChange={(e) => handleChange('instagram_url', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Facebook URL
                </label>
                <input
                  type="text"
                  value={form.facebook_url || ''}
                  onChange={(e) => handleChange('facebook_url', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  YouTube URL
                </label>
                <input
                  type="text"
                  value={form.youtube_url || ''}
                  onChange={(e) => handleChange('youtube_url', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Visiting Protocol */}
        {activeTab === 'visiting' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2">
              Private Visiting Protocol & Bio-Security Guidelines
            </h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Visiting Protocol (Displayed on Contact & Viewing request page)
                </label>
                <textarea
                  rows={4}
                  value={form.visiting_hours || ''}
                  onChange={(e) => handleChange('visiting_hours', e.target.value)}
                  placeholder="e.g. By confirmed private appointment only. Strict bio-security protocols..."
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Rescue Page Content */}
        {activeTab === 'rescue' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold border-b border-[#B7B0A4]/20 pb-2">
              Rescue Page Content & Sanctuary Copy
            </h3>
            <p className="text-xs text-[#73716B]">
              Customize all headings, introductory paragraphs, mission statements, and rehoming text displayed on the public Rescue & Rehabilitation page.
            </p>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Rescue Page Title (H1)
                </label>
                <input
                  type="text"
                  value={form.rescue_page_title || ''}
                  onChange={(e) => handleChange('rescue_page_title', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Rescue Page Intro Paragraphs (Separate paragraphs with blank lines)
                </label>
                <textarea
                  rows={4}
                  value={form.rescue_page_intro || ''}
                  onChange={(e) => handleChange('rescue_page_intro', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Our Mission Text
                </label>
                <textarea
                  rows={4}
                  value={form.rescue_page_mission || ''}
                  onChange={(e) => handleChange('rescue_page_mission', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  A Second Chance Text
                </label>
                <textarea
                  rows={4}
                  value={form.rescue_page_second_chance || ''}
                  onChange={(e) => handleChange('rescue_page_second_chance', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Responsible Rehoming Text
                </label>
                <textarea
                  rows={3}
                  value={form.rescue_page_rehoming || ''}
                  onChange={(e) => handleChange('rescue_page_rehoming', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                    Help Us Section Title
                  </label>
                  <input
                    type="text"
                    value={form.rescue_page_help_title || ''}
                    onChange={(e) => handleChange('rescue_page_help_title', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D] min-h-[40px]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#73716B] font-medium">
                  Help Us Section Text
                </label>
                <textarea
                  rows={3}
                  value={form.rescue_page_help_text || ''}
                  onChange={(e) => handleChange('rescue_page_help_text', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#B7B0A4]/40 text-[#20201E] focus:outline-none focus:border-[#24362D]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Database & Persistence */}
        {activeTab === 'database' && (
          <div className="bg-white border border-[#B7B0A4]/35 p-5 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-[#B7B0A4]/20 pb-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A89472] font-semibold flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span>Persistence & Storage Layer</span>
              </h3>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  isConfiguredWithSupabase
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}
              >
                {isConfiguredWithSupabase ? 'Supabase Connected' : 'Estate Store Active'}
              </span>
            </div>

            <p className="text-xs text-[#73716B] leading-relaxed">
              {isConfiguredWithSupabase
                ? 'Your estate database is actively connected to Supabase Cloud PostgreSQL, with full Row Level Security (RLS) policies and storage bucket uploads.'
                : 'All studbook records, rescue dossiers, journal entries, client inquiries, and settings are currently stored with client persistence. To link a production Supabase instance, supply VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment configuration.'}
            </p>

            <div className="p-4 bg-[#FAF9F6] border border-[#B7B0A4]/30 space-y-2 text-xs">
              <span className="font-serif text-sm text-[#20201E] font-medium block">
                Database Schema Features
              </span>
              <ul className="space-y-1 text-[#73716B] list-disc list-inside">
                <li>Strict Studbook Registry with 3-generation pedigrees & FEI passports</li>
                <li>Rescue Sanctuary timeline with chronological progress milestones</li>
                <li>Estate Journal editorial CMS with SEO metadata tags</li>
                <li>Inquiry Inbox with status workflow (new, read, replied, archived)</li>
              </ul>
            </div>

            {/* API Diagnostic & Verification Tool */}
            <div className="p-4 border border-[#B7B0A4]/35 bg-white space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-serif font-medium text-[#20201E] flex items-center space-x-2">
                    <Activity className="w-3.5 h-3.5 text-[#A89472]" />
                    <span>API Health & Connectivity Test</span>
                  </h4>
                  <p className="text-[11px] text-[#73716B]">
                    Query the database endpoints directly to verify live read/write readiness.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleTestApi}
                  disabled={isTestingApi}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs bg-[#24362D] text-white hover:bg-[#1b2821] transition-colors disabled:opacity-50 self-start sm:self-auto cursor-pointer"
                >
                  <RefreshCw className={`w-3 h-3 ${isTestingApi ? 'animate-spin' : ''}`} />
                  <span>{isTestingApi ? 'Testing API...' : 'Test API Connection'}</span>
                </button>
              </div>

              {apiTestResult && (
                <div
                  className={`p-3 text-xs border ${
                    apiTestResult.connected
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                      : apiTestResult.configured
                      ? 'bg-amber-50/70 border-amber-300 text-amber-900'
                      : 'bg-[#FAF9F6] border-[#B7B0A4]/40 text-[#20201E]'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {apiTestResult.connected ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="font-medium text-xs">{apiTestResult.message}</p>
                      {apiTestResult.latencyMs !== undefined && (
                        <p className="text-[11px] text-gray-500">
                          Roundtrip API latency: {apiTestResult.latencyMs} ms
                        </p>
                      )}
                      {apiTestResult.tablesVerified && (
                        <p className="text-[11px] text-gray-500">
                          Verified endpoints: {apiTestResult.tablesVerified.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Save Bar */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-[#B7B0A4]/20">
          <button
            type="button"
            onClick={() => handleSave()}
            disabled={isSaving}
            className="px-6 py-2.5 bg-[#24362D] text-white text-xs uppercase tracking-wider hover:bg-[#1c2a23] transition-colors disabled:opacity-50 min-h-[42px] font-medium shadow-xs cursor-pointer"
          >
            {isSaving ? 'Saving...' : 'Save All Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};
