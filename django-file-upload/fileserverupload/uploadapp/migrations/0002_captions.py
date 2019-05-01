# Generated by Django 2.1.1 on 2019-04-30 19:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('uploadapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Captions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('caption_text', models.TextField()),
                ('img', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uploadapp.Image')),
            ],
        ),
    ]