import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const articles = [
    {
      id: 1,
      title: "Современные тренды в веб-дизайне 2024",
      excerpt: "Разбираем актуальные направления и техники, которые формируют будущее цифрового дизайна",
      category: "Дизайн",
      readTime: "5 мин",
      date: "15 сентября 2024",
      image: "/img/7a67e350-1d03-4738-a4c2-f2b52c857a84.jpg"
    },
    {
      id: 2,
      title: "Психология пользователей в UX",
      excerpt: "Как понимание психологии помогает создавать более интуитивные интерфейсы",
      category: "UX",
      readTime: "7 мин",
      date: "12 сентября 2024",
      image: "/img/7a67e350-1d03-4738-a4c2-f2b52c857a84.jpg"
    },
    {
      id: 3,
      title: "Минимализм vs Максимализм",
      excerpt: "Когда выбрать простоту, а когда стоит добавить сложности в дизайн",
      category: "Концепция",
      readTime: "4 мин",
      date: "8 сентября 2024",
      image: "/img/7a67e350-1d03-4738-a4c2-f2b52c857a84.jpg"
    }
  ];

  const socialShare = (platform: string, title: string) => {
    const url = window.location.href;
    const text = `Читайте статью: ${title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-turquoise/10">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                ModernBlog
              </h1>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-coral transition-colors">Главная</a>
                <a href="#about" className="text-gray-700 hover:text-coral transition-colors">Обо мне</a>
                <a href="#articles" className="text-gray-700 hover:text-coral transition-colors">Статьи</a>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" onClick={() => socialShare('twitter', 'Мой блог')}>
                <Icon name="Twitter" size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => socialShare('telegram', 'Мой блог')}>
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-blue to-turquoise bg-clip-text text-transparent leading-tight">
              Творчество в каждом пикселе
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Исследую мир дизайна, технологий и креативности. Делюсь опытом и инсайтами 
              о том, как создавать продукты, которые вдохновляют.
            </p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/img/7a67e350-1d03-4738-a4c2-f2b52c857a84.jpg" 
              alt="Hero" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Обо мне</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Привет! Я дизайнер и разработчик с 5+ летним опытом создания 
                    цифровых продуктов. Специализируюсь на UX/UI дизайне и фронтенд-разработке.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Верю, что хороший дизайн — это баланс между красотой и функциональностью. 
                    В блоге делюсь процессом создания и размышлениями о digital-мире.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => socialShare('linkedin', 'Профиль автора')}
                      className="border-blue hover:bg-blue hover:text-white transition-all"
                    >
                      <Icon name="Linkedin" size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => socialShare('twitter', 'Профиль автора')}
                      className="border-coral hover:bg-coral hover:text-white transition-all"
                    >
                      <Icon name="Twitter" size={16} className="mr-2" />
                      Twitter
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => socialShare('telegram', 'Телеграм канал')}
                      className="border-turquoise hover:bg-turquoise hover:text-white transition-all"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/img/c73a155a-8f75-4b7e-8735-49231c57f250.jpg" 
                      alt="Автор блога" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-coral to-turquoise rounded-full opacity-20"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Последние статьи</h3>
            <p className="text-xl text-gray-600">Свежие мысли и идеи о дизайне и разработке</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-coral/90 text-white hover:bg-coral">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Icon name="Calendar" size={14} className="mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Icon name="Clock" size={14} className="mr-2" />
                    {article.readTime}
                  </div>
                  
                  <CardTitle className="text-xl mb-3 leading-tight hover:text-coral transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="text-coral hover:text-coral hover:bg-coral/5 p-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => socialShare('twitter', article.title)}
                        className="p-2 hover:bg-blue/10 hover:text-blue"
                      >
                        <Icon name="Twitter" size={14} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => socialShare('facebook', article.title)}
                        className="p-2 hover:bg-blue/10 hover:text-blue"
                      >
                        <Icon name="Facebook" size={14} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => socialShare('telegram', article.title)}
                        className="p-2 hover:bg-turquoise/10 hover:text-turquoise"
                      >
                        <Icon name="Send" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              ModernBlog
            </h4>
            <p className="text-gray-400 max-w-md mx-auto">
              Следите за новыми статьями и обновлениями в социальных сетях
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => socialShare('twitter', 'ModernBlog')}
              className="text-gray-400 hover:text-coral hover:bg-coral/10"
            >
              <Icon name="Twitter" size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => socialShare('facebook', 'ModernBlog')}
              className="text-gray-400 hover:text-blue hover:bg-blue/10"
            >
              <Icon name="Facebook" size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => socialShare('telegram', 'ModernBlog')}
              className="text-gray-400 hover:text-turquoise hover:bg-turquoise/10"
            >
              <Icon name="Send" size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => socialShare('linkedin', 'ModernBlog')}
              className="text-gray-400 hover:text-blue hover:bg-blue/10"
            >
              <Icon name="Linkedin" size={20} />
            </Button>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 ModernBlog. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;