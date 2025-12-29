import React, { useState } from 'react';
import {
  Heart,
  Calendar,
  Sparkles,
  Users,
  Gift,
  Camera,
  Palette,
  Award,
  Eye,
  Star,
  Smile,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  heroData,
  aboutData,
  servicesData,
  portfolioData,
  whyChooseData,
  testimonialsData,
  packagesData
} from '../mock';

const iconMap = {
  Heart,
  Calendar,
  Sparkles,
  Users,
  Gift,
  Camera,
  Palette,
  Award,
  Eye,
  Star,
  Smile
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    message: ''
  });

  const categories = ['All', 'Modern Wedding', 'Traditional Wedding', 'Intimate Wedding', 'Outdoor Wedding'];
  const filteredPortfolio = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', weddingDate: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in"
            style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.2s' }}
          >
            {heroData.headline}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 tracking-wide animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {heroData.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg transition-all duration-300"
            >
              View Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-6 text-lg transition-all duration-300"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {aboutData.title}
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {aboutData.description}
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-400 mb-2">{aboutData.yearsOfExperience}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-400 mb-2">{aboutData.weddingsOrganized}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Weddings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-400 mb-2">{aboutData.happyClients}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
                alt="Wedding"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Services
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br from-white to-rose-50"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-400 transition-colors duration-300">
                      <IconComponent className="text-rose-400 group-hover:text-white transition-colors duration-300" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`${
                    selectedCategory === category
                      ? 'bg-rose-400 hover:bg-rose-500 text-white'
                      : 'border-rose-400 text-rose-400 hover:bg-rose-50'
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.coupleName}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm uppercase tracking-wide text-rose-300 mb-2">{item.category}</div>
                    <div className="text-xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.coupleName}
                    </div>
                    <div className="text-sm text-gray-300">{item.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why Choose AJ STORY
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseData.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                      <IconComponent className="text-rose-400" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Continued in next part */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Happy Couples
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <Card className="relative border-none shadow-2xl">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonialsData[currentTestimonial].image}
                  alt={testimonialsData[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover mb-6"
                />
                <p className="text-lg text-gray-700 italic mb-6">
                  "{testimonialsData[currentTestimonial].testimonial}"
                </p>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonialsData[currentTestimonial].name}
                </h4>
                <div className="flex space-x-1 mt-4">
                  {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="fill-rose-400 text-rose-400" size={20} />
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === 0 ? testimonialsData.length - 1 : prev - 1
                    )
                  }
                  className="border-rose-400 text-rose-400 hover:bg-rose-50"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === testimonialsData.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="border-rose-400 text-rose-400 hover:bg-rose-50"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Wedding Packages
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative border-2 ${
                  pkg.popular ? 'border-rose-400 shadow-2xl scale-105' : 'border-gray-200'
                } transition-all duration-300 hover:shadow-xl"`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-rose-400 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-rose-400 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-rose-400 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-rose-400 hover:bg-rose-500 text-white'
                        : 'bg-white border-2 border-rose-400 text-rose-400 hover:bg-rose-50'
                    } transition-all duration-300`}
                  >
                    Request Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Create Your Dream Wedding
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Every love story deserves to be beautifully told. Let us help you create memories that last a lifetime.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-6 text-lg transition-all duration-300"
          >
            Contact AJ STORY <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-rose-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">+1234567890</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-rose-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@ajstory.com</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="border-gray-300 focus:border-rose-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="border-gray-300 focus:border-rose-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="border-gray-300 focus:border-rose-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="date"
                      name="weddingDate"
                      placeholder="Wedding Date"
                      value={formData.weddingDate}
                      onChange={handleFormChange}
                      className="border-gray-300 focus:border-rose-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your dream wedding..."
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      className="border-gray-300 focus:border-rose-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-rose-400 hover:bg-rose-500 text-white py-6 text-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;