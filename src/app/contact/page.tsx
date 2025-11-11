
import AppLayout from '../app-layout';
import HeroSection from '@/components/contact/HeroSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import DepartmentContacts from '@/components/contact/DepartmentContacts';
import FaqSection from '@/components/contact/FaqSection';
import OfficeLocations from '@/components/contact/OfficeLocations';
import MapSection from '@/components/contact/MapSection';
import SocialMediaSection from '@/components/contact/SocialMediaSection';
import CareerCta from '@/components/contact/CareerCta';
import NewsletterSignup from '@/components/contact/NewsletterSignup';
import FeedbackSection from '@/components/contact/FeedbackSection';
import BookingCta from '@/components/contact/BookingCta';

export default function ContactPage() {
    return (
        <AppLayout>
            <HeroSection />
            <ContactFormSection />
            <DepartmentContacts />
            <FaqSection />
            <OfficeLocations />
            <MapSection />
            <SocialMediaSection />
            <CareerCta />
            <NewsletterSignup />
            <FeedbackSection />
            <BookingCta />
        </AppLayout>
    );
}
