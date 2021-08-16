"""recipe_photo model

Revision ID: 45a38947618a
Revises: 432b9dfc041a
Create Date: 2021-08-16 14:24:43.230052

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '45a38947618a'
down_revision = '432b9dfc041a'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('recipe_photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('video_url', sa.String(length=500)),
    sa.Column('img_url', sa.String(length=500)),
    sa.Column('recipe_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),

    ) 


def downgrade():
    op.drop_table('recipe_photos')
