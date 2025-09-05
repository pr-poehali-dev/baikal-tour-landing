import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 font-open-sans">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-lake-blue" />
              <span className="text-2xl font-montserrat font-bold text-slate-800">BAIKAL TOUR</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#routes" className="text-slate-600 hover:text-lake-blue transition-colors">Маршруты</a>
              <a href="#tours" className="text-slate-600 hover:text-lake-blue transition-colors">Туры</a>
              <a href="#gallery" className="text-slate-600 hover:text-lake-blue transition-colors">Галерея</a>
              <a href="#reviews" className="text-slate-600 hover:text-lake-blue transition-colors">Отзывы</a>
              <a href="#contact" className="text-slate-600 hover:text-lake-blue transition-colors">Контакты</a>
              <Button className="bg-lake-blue hover:bg-lake-blue/90 text-white">Забронировать</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/91b4b7df-7430-425c-b5ce-22c309cf19c7.jpg" 
            alt="Зимний Байкал" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            Зимний Байкал
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-open-sans">
            Откройте магию замёрзшего озера и ледяных пещер
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lake-blue hover:bg-lake-blue/90 text-white px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-slate-800 mb-4">
              Уникальные зимние приключения
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Испытайте невероятные ощущения от прогулки по прозрачному льду Байкала и исследования природных ледяных пещер
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Icon name="Snowflake" size={48} className="text-lake-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat text-xl">Ледяные пещеры</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Исследуйте удивительные природные ледяные образования и пещеры, созданные самой природой
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Icon name="Compass" size={48} className="text-lake-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat text-xl">Прогулки по льду</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Пройдитесь по кристально чистому льду Байкала и насладитесь невероятными видами
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Icon name="Camera" size={48} className="text-lake-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat text-xl">Фото сафари</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Сделайте незабываемые снимки уникальных зимних пейзажей и ледяных формаций
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-slate-800 mb-4">
              Зимние туры
            </h2>
            <p className="text-lg text-slate-600">
              Выберите идеальный тур для вашего зимнего приключения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/img/d44be969-6e7f-43a6-900b-258272ce14d5.jpg" 
                  alt="Ледяные пещеры" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-lake-blue">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Тур в ледяные пещеры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span>3 дня / 2 ночи</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Users" size={16} className="mr-2" />
                    <span>До 8 человек</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span>Ольхонские пещеры</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-lake-blue font-montserrat">45 000 ₽</span>
                    <Button className="bg-lake-blue hover:bg-lake-blue/90">Забронировать</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/img/9650932b-0490-42f8-bf4c-d4bd7c2758de.jpg" 
                  alt="Групповой тур" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Эко-тур</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Зимнее сафари по льду</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span>5 дней / 4 ночи</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Users" size={16} className="mr-2" />
                    <span>До 12 человек</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span>Весь Байкал</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-lake-blue font-montserrat">78 000 ₽</span>
                    <Button className="bg-lake-blue hover:bg-lake-blue/90">Забронировать</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/img/91b4b7df-7430-425c-b5ce-22c309cf19c7.jpg" 
                  alt="VIP тур" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-600">VIP</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Эксклюзивный зимний тур</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span>7 дней / 6 ночей</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="Users" size={16} className="mr-2" />
                    <span>До 4 человек</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span>Частный тур</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-lake-blue font-montserrat">120 000 ₽</span>
                    <Button className="bg-lake-blue hover:bg-lake-blue/90">Забронировать</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-slate-800 mb-4">
              Отзывы туристов
            </h2>
            <p className="text-lg text-slate-600">
              Что говорят наши гости о зимних турах по Байкалу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Невероятные впечатления! Ледяные пещеры просто фантастические. Гиды очень профессиональные, всё организовано на высшем уровне."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lake-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    А
                  </div>
                  <div>
                    <p className="font-semibold">Анна Петрова</p>
                    <p className="text-sm text-slate-500">Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Зимний Байкал - это что-то невероятное! Прозрачный лёд, через который видно дно на глубине 40 метров. Обязательно вернемся!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lake-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    С
                  </div>
                  <div>
                    <p className="font-semibold">Сергей Волков</p>
                    <p className="text-sm text-slate-500">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                    <Icon name="Star" size={16} />
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Лучший тур в моей жизни! Организация на высоте, безопасность превыше всего. Фотографии получились просто волшебные."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lake-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    М
                  </div>
                  <div>
                    <p className="font-semibold">Мария Смирнова</p>
                    <p className="text-sm text-slate-500">Екатеринбург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-slate-800 mb-4">
              Забронировать тур
            </h2>
            <p className="text-lg text-slate-600">
              Оставьте заявку и мы свяжемся с вами для уточнения деталей
            </p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Имя и фамилия
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Предпочтительный тур
                    </label>
                    <Input placeholder="Выберите тур" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Количество человек
                    </label>
                    <Input placeholder="2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Дополнительная информация
                  </label>
                  <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                </div>
                <Button className="w-full bg-lake-blue hover:bg-lake-blue/90 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={32} className="text-lake-blue" />
                <span className="text-2xl font-montserrat font-bold">BAIKAL TOUR</span>
              </div>
              <p className="text-slate-300 mb-4">
                Профессиональная организация зимних туров по Байкалу. 
                Безопасность и незабываемые впечатления гарантированы.
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-lake-blue" />
                <Icon name="Mail" size={20} className="text-lake-blue" />
                <Icon name="MessageCircle" size={20} className="text-lake-blue" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-3 text-lake-blue" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-3 text-lake-blue" />
                  <span>info@baikaltour.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-3 text-lake-blue" />
                  <span>Иркутск, ул. Байкальская, 25</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Услуги</h4>
              <div className="space-y-2">
                <p className="text-slate-300">Туры по ледяным пещерам</p>
                <p className="text-slate-300">Зимнее сафари по льду</p>
                <p className="text-slate-300">Фото-туры</p>
                <p className="text-slate-300">Эксклюзивные туры</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-600" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Baikal Tour. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;