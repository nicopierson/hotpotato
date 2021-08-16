"""recipe directions model

Revision ID: d8d06784f204
Revises: 432b9dfc041a
Create Date: 2021-08-16 10:16:01.015916

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8d06784f204'
down_revision = '432b9dfc041a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipe_directions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('steps', sa.Integer(), nullable=False),
    sa.Column('directions', sa.String(length=500), nullable=False),
    sa.Column('recipe_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('recipe_directions')
    # ### end Alembic commands ###