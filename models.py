from sqlalchemy import Column, Float, String, Date, Integer
from sqlalchemy.orm import sessionmaker
from database import Base, engine


class Car(Base):
    __tablename__ = "automobile_info"
    serialnumber = Column(String(11), primary_key=True)
    automodel = Column(String(40))
    autoowner = Column(String(20))
    automileage = Column(Integer)
